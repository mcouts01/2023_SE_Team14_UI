import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
  })
export class Button implements OnInit {
    public buttonText = "";

	@Input()
	set text(name: string) {
		this.buttonText = name.toUpperCase();
	}
	get name(): string {
		return this.buttonText;
	}

	@Input() color: string = '808080';
	@Input() type: string = 'button';
	@Output() btnClick = new EventEmitter();
	@Input() isDisabled = false;

    constructor() { }

    ngOnInit(): void {
    }

    onClick() {
        this.btnClick.emit();
    }
}