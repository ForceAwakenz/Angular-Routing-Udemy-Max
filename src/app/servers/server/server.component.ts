import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.route.snapshot.params.id);
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params.id);
    })
  }

  onEditServer() {
    // this.router.navigate(['/servers', this.server.id, 'edit']);
    // this.router.navigate(['edit'], {relativeTo: this.route, queryParams: this.route.snapshot.queryParams });
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
