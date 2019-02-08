import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  words = [
    "Açaí",
    "Apple",
    "Akee",
    "Apricot",
    "Avocado",
    "Banana",
    "Bilberry",
    "Blackberry",
    "Blackcurrant",
    "Black sapote",
    "Blueberry",
    "Boysenberry",
    "Buddha's hand (fingered citron)",
    "Crab apples",
    "Currant",
    "Cherry",
    "Cherimoya (Custard Apple)",
    "Chico fruit",
    "Cloudberry",
    "Coconut",
    "Cranberry"
  ];

  filteredWords = this.words;

  term = "";

  doSearch() {
    this.filteredWords = this.words.filter(s =>
      s.toLowerCase().includes(this.term.toLowerCase())
    );
  }

  resetSearch() {
    this.term = "";
    this.filteredWords = this.words;
  }
}
