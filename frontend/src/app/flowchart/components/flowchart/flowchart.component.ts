import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var $: any;
import { from } from 'rxjs';

import * as d3 from 'd3';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.scss'],
})
export class FlowchartComponent implements OnInit {
  svgImage: SafeHtml = '';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const initDragging = () => {
      $('#svg-container').draggable();
    };
    from(this.getSVGImage()).subscribe(() => {
      initDragging();
    });
  }

  getSVGImage(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${environment.apiUrl}/api/visualization/image/`, {
          responseType: 'text',
        })
        .subscribe((svgData: string) => {
          const sanitizedSVG = this.sanitizer.bypassSecurityTrustHtml(svgData);
          this.svgImage = sanitizedSVG;

          setTimeout(() => {
            this.addInfoIconToNodes();
          }, 0);
          resolve();
        });
    });
  }

  addInfoIconToNodes(): void {
    const nodes = d3.selectAll('.node');
    console.log(nodes);

    nodes.each(function () {
      const node = d3.select(this);

      const iconGroup = node
        .append('g')
        .attr('class', 'info-icon')
        .attr('transform', function () {
          const x = parseFloat(node.select('text').attr('x'));
          const y = parseFloat(node.select('text').attr('y'));
          return `translate(${x + -60},${y + 4})`;
        })
        .on('click', handleClick)
        .style('cursor', 'pointer');

      const circle = iconGroup
        .append('circle')
        .attr('r', 8)
        .style('fill', '#3944bc')
        .style('stroke', 'white')
        .style('stroke-width', '1px');
      iconGroup
        .append('text')
        .attr('x', 0)
        .attr('y', 1)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .style('fill', 'white')
        .style('font-size', '10px')
        .style('font-family', 'Lobster')
        .text('i');

      iconGroup
        .on('mouseenter', function () {
          d3.select(circle.node())
            .style('stroke', '#ffffff')
            .style('filter', 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))');
        })
        .on('mouseleave', function () {
          d3.select(circle.node())
            .style('fill', '#3944bc')
            .style('stroke', '#ffffff')
            .style('filter', 'none');
        });

      function handleClick() {
        console.log('clicou');
      }
    });
  }
}
