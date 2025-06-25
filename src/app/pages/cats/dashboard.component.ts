import {Component, inject, signal, WritableSignal} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {AuthService} from "../../services/auth/auth.service";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {CatInfosComponent} from "../../components/cat-infos/cat-infos.component";
import {CatInfosService} from "../../services/cat-infos/cat-infos.service";
import {finalize, take} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatProgressBar} from "@angular/material/progress-bar";

@Component({
    selector: 'app-dashboard',
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    ReactiveFormsModule,
    CatInfosComponent,
    MatButton,
    MatProgressBar,
  ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private _auth = inject(AuthService);
  private _router = inject(Router);
  private _catInfosService = inject(CatInfosService);
  private _snackBar = inject(MatSnackBar);

  infos = signal<string[]>([]);
  loading = signal<boolean>(false);

  public logout() {
    this._auth.logout();
    this._router.navigate(['/login']).then();
  }

  public get name(): WritableSignal<string | null>{
    return this._auth.loggedUser;
  }

  public loadNew(){
    this.loading.set(true);
     this._catInfosService.loadInfo().pipe(
       take(1),
       finalize(() => this.loading.set(false)),
     ).subscribe(info =>{
       return this.infos().includes(info) ? this._openSnackBar('Already exist') : this._updateInfos(info)});
  }

  private _updateInfos(info: string){
    this.infos.update((infos)=> [...infos, info]);
  }

  private _openSnackBar(message: string) {
    this._snackBar.open(message, 'Close');
  }
}
