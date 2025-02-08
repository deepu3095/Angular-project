import { Component } from '@angular/core';

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent {
  streetImages = [
    {
      src: "https://independent-photo.com/wp-content/uploads/2019/01/Man-And-Dog-1980-Jamel-Shabazz-1791x1200.jpg",
      title: "Serene Sunset Over Mountains",
      description: "Experience the tranquility of nature at its finest.",
      author: "John Smith",
      alt: "Beautiful Landscape"
    },
    {
      src: "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?h=700&w=1200&fit=crop&dpr=1&auto=compress&cs=tinysrgb",
      title: "Joyful Moments",
      description: "A candid capture of happiness and charm.",
      author: "Emily Davis",
      alt: "Smiling Girl"
    },
    {
      src: "https://germanstreetphotography.com/wp-content/uploads/2017/12/Martin-U-Waltz-street-photography-germany-1.jpg",
      title: "Innocent Wonder",
      description: "The world seen through the eyes of a child.",
      author: "Michael Johnson",
      alt: "Adorable Child"
    },
    {
      src: "https://i0.wp.com/shooterfiles.com/wp-content/uploads/2016/08/Hanoi-Shooter-Files-9.jpg?resize=800%2C533",
      title: "Playful Adventures",
      description: "Capturing moments of pure joy and discovery.",
      author: "Sarah Lee",
      alt: "Child Playing"
    },
    {
      src: "https://i0.wp.com/shooterfiles.com/wp-content/uploads/2016/01/61-Photos-19.jpg?resize=800%2C532",
      title: "Artistic Vibes",
      description: "An enchanting portrait blending elegance and grace.",
      author: "David Brown",
      alt: "Artistic Portrait"
    },
    {
      src: "https://64.media.tumblr.com/272cfba22a9e4acd5449a816c0c3926b/c3e2643ee8b413d2-06/s1280x1920/5864d16a6343ce9bfdc75e0ffd0a6b8d86562160.jpg",
      title: "Curiosity and Wonder",
      description: "A curious spirit exploring the beauty of the world.",
      author: "Anna Garcia",
      alt: "Curious Girl"
    },
    {
      src: "https://www.creativelive.com/blog/wp-content/uploads/2018/09/webimage-BF382495-FF39-4B62-8EF84884D4DABE4B-620x413.jpg",
      title: "Abstract Elegance",
      description: "A mesmerizing blend of colors and creativity.",
      author: "Robert Wilson",
      alt: "Creative Art"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0QYXi82gLsFJSXifAiK6T5LFxUrivFlbO_buoU1rmUQH_q5AvPSdpoN4hT5SZoY0PD0&usqp=CAU",
      title: "Whimsical Dreams",
      description: "An artistic depiction of serenity and imagination.",
      author: "Laura Martinez",
      alt: "Anime Style"
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/554e1c83e4b08a0248ca70c4/1626431819069-R716ZF5Z59T7O9EX1IG1/Streetlamps+and+Signs.jpg",
      title: "Nature's Embrace",
      description: "A serene moment immersed in the beauty of nature.",
      author: "James Anderson",
      alt: "Girl in Nature"
    }
  ];

  selectedImage: any = null;

  showDetails(image: any) {
    this.selectedImage = image;
  }

  closeDetails() {
    this.selectedImage = null;
  }
}
