import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface BreadcrumbItem {
    label: string;
    icon?: string;
    link?: string;
}

@Component({
    selector: 'app-breadcrumb',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule
    ],
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
    @Input() items: BreadcrumbItem[] = [];
    @Input() title: string = '';
}
