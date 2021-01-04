import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserProfilService } from '../user-profil.service';
import { UserProfil } from './user-profil.model';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-user-profil-list',
  templateUrl: './user-profil-list.component.html',
  styleUrls: ['./user-profil-list.component.scss']
})
export class UserProfilListComponent implements OnInit {
  profils: any;

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'libelle', 'actions'];
  dataSource!: MatTableDataSource<UserProfil>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private UserProfilSrv: UserProfilService) {
    //Fetch profils
   /*  this.UserProfilSrv.findAll().subscribe(data => {
      console.log(data);

      this.profils = data['hydra:member'];

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.profils);
    });
    this.UserProfilSrv.findAll().pipe(tap((result: any) => console.log(result))); */

  }

 /*  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } */
  deleteUser() {
    console.log("delete");
  }
}
