class Link {
    title: string;
    link: string;
    votes: number;

    constructor(title:string,link: string, votes: number){
          this.title = title; // asigan el valor que te paso al titulo 
          this.link = link; 
          this.votes = votes || 0 ;
    }

// metodos
voteUp(){
 this.votes++;
}
voteDown(){
  this.votes--;
}
  }
