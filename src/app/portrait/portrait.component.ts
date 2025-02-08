import { Component } from '@angular/core';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css']
})
export class PortraitComponent {
  portraitImages = [
    {
      src: "https://tse3.mm.bing.net/th?id=OIP.TP0Y19ireOXf9KzsOxLfdAHaEK&pid=Api&P=0&h=220",
      title: "Serene Sunset Over Mountains",
      description: "Experience the tranquility of nature at its finest.",
      author: "David Johnson",
      alt: "Beautiful Landscape"
    },
    {
      src: "https://www.pixelstalk.net/wp-content/uploads/2016/10/Cute-Beautiful-Girl-Background.jpg",
      title: "Joyful Moments",
      description: "A candid capture of happiness and charm.",
      author: "John Doe",
      alt: "Smiling Girl"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPXEi2mqb99MxYPaclb33wEnMlR_MH7ImEg&s",
      title: "Innocent Wonder",
      description: "The world seen through the eyes of a child.",
      author: "Emily Smith",
      alt: "Adorable Child"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIyTZVXyb90oYHRiiX6YkNUc0CnzGwWjI3Q&s",
      title: "Playful Adventures",
      description: "Capturing moments of pure joy and discovery.",
      author: "Michael Brown",
      alt: "Child Playing"
    },
    {
      src: "https://www.schoolofpainting.co.uk/wp-content/uploads/image00002-1-1-scaled-e1715096941907-1024x829.jpeg",
      title: "Artistic Vibes",
      description: "An enchanting portrait blending elegance and grace.",
      author: "Sarah Thompson",
      alt: "Artistic Portrait"
    },
    {
      src: "https://thumbs.dreamstime.com/b/portrait-cute-little-girl-20944989.jpg",
      title: "Curiosity and Wonder",
      description: "A curious spirit exploring the beauty of the world.",
      author: "Olivia Martinez",
      alt: "Curious Girl"
    },
    {
      src: "https://cdn.openart.ai/uploads/image_random_hTbyW-u3_1675616833907_1024.webp",
      title: "Abstract Elegance",
      description: "A mesmerizing blend of colors and creativity.",
      author: "Daniel Carter",
      alt: "Creative Art"
    },
    {
      src: "https://www.hdwallpapers.in/download/cute_adorable_girl_baby_is_looking_up_wearing_purple_dress_hd_cute-HD.jpg",
      title: "Whimsical Dreams",
      description: "An artistic depiction of serenity and imagination.",
      author: "Sophia Wilson",
      alt: "Anime Style"
    },
    {
      src: "https://i.pinimg.com/originals/b0/60/ce/b060ce0a5314a762aa972dfd78356133.jpg",
      title: "Nature's Embrace",
      description: "A serene moment immersed in the beauty of nature.",
      author: "William Anderson",
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
