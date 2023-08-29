import { Component,OnInit } from '@angular/core';
import { Training } from '../formation';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit{
  constructor(private service: FormationService,private route: ActivatedRoute) { } 
  training:Training=<Training>{};
  imagePath: string="./assets/img/istockphoto-597963388-612x612.jpg"
  imagePath2: string="./assets/img/istockphoto-1303821441-612x612.jpg"
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.training=this.service.getTrainingById(id)!;
  }
}
