import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ExperiencesService} from "../../services/experiences.service";
import {Experience} from "../../interfaces/experience";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit, OnDestroy {
  isLoading = true;
  private experienceSub: Subscription;
  public experiences: Experience[];

  constructor(public experienceService: ExperiencesService) { }

  ngOnInit() {
    this.fetchExperienceFromJsonFile();
  }

  private fetchExperienceFromJsonFile()  {
    if (this.experienceSub) {
      this.experienceSub.unsubscribe();
    }

    this.experienceSub = this.experienceService.listExperiences().subscribe(res => {
      this.experiences = structuredClone(res);
      this.experiences = this.experiences.sort((a:Experience, b:Experience) => {
        return a.order - b.order;
      })
      this.isLoading = false;
    })
  }

  ngOnDestroy() {
    this.experienceSub.unsubscribe()
  }


}
