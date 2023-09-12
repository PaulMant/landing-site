import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ExperiencesService} from "../../services/experiences.service";
import {Experience} from "../../interfaces/experience";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatrixDisplayerService} from "../../services/matrix-displayer.service";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        opacity: '1',
        overflow: 'hidden',
      })),
      state('out', style({
        overflow: 'hidden',
        opacity:0
      })),
      transition('out => in', animate('1200ms ease-in-out'))
    ])
  ]
})
export class WelcomePageComponent implements OnInit, OnDestroy {
  isLoading = true;
  displaySite = '';
  statusText = 'myCurrentStatus';
  private experienceSub: Subscription;
  public experiences: Experience[];

  constructor(public experienceService: ExperiencesService,
              private matrixDisplayerService: MatrixDisplayerService) { }

  ngOnInit() {
    this.displaySite = this.matrixDisplayerService.getDisplayMatrix() ? 'out' : 'in';
    this.fetchExperienceFromJsonFile();
  }

  private fetchExperienceFromJsonFile()  {
    if (this.experienceSub) {
      this.experienceSub.unsubscribe();
    }

    this.experienceSub = this.experienceService.listExperiences().subscribe(async res => {
      this.experiences = structuredClone(res);
      this.experiences = this.experiences.sort((a: Experience, b: Experience) => {
        return a.order - b.order;
      })
      if (this.matrixDisplayerService.getDisplayMatrix()) {
        await new Promise(f => setTimeout(f, 3450));
        this.isLoading = false;
        await new Promise(f => setTimeout(f, 5));
        this.displaySite='in';
        this.matrixDisplayerService.setDisplayMatrix(false);
      } else {
        this.isLoading = false;
      }


    })
  }

  ngOnDestroy() {
    this.experienceSub.unsubscribe()
  }
}
