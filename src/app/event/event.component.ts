import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  eventImages = [
    {
      src: "https://res.cloudinary.com/stream1/image/upload/v1532279187/stream1//img/pages/professional-event-photographer.jpg",
      title: "Serene Sunset Over Mountains",
      description: "Experience the tranquility of nature at its finest.",
      author: "James Anderson",
      alt: "Beautiful Landscape"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoU4mucOz14LnwNtTm5x9gd7OfRENaZnePvg&s",
      title: "Joyful Moments",
      description: "A candid capture of happiness and charm.",
      author: "Sophia Roberts",
      alt: "Smiling Girl"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Hs9xsT2_PWsWnrefk84MPYYyiXI9mWxKhw&s",
      title: "Innocent Wonder",
      description: "The world seen through the eyes of a child.",
      author: "Olivia Martinez",
      alt: "Adorable Child"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDuDN6O_9-V0JJcRMbel1Ny2CTeQP_j_0rw&s",
      title: "Playful Adventures",
      description: "Capturing moments of pure joy and discovery.",
      author: "David Miller",
      alt: "Child Playing"
    },
    {
      src: "https://2.wlimg.com/product_images/bc-full/2021/11/9148538/event-photography-services-1636524497-6071665.jpeg",
      title: "Artistic Vibes",
      description: "An enchanting portrait blending elegance and grace.",
      author: "Emma Johnson",
      alt: "Artistic Portrait"
    },
    {
      src: "https://youthincmag.com/wp-content/uploads/2019/04/Wedding-trends-pinterest-1280x720.jpg",
      title: "Curiosity and Wonder",
      description: "A curious spirit exploring the beauty of the world.",
      author: "Noah Carter",
      alt: "Curious Girl"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDDIUkOvaXGOy3TwETFMXGyNtVG0zKcZywg&s",
      title: "Abstract Elegance",
      description: "A mesmerizing blend of colors and creativity.",
      author: "Liam Davis",
      alt: "Creative Art"
    },
    {
      src: "https://shineevents.co.in/wp-content/uploads/2021/11/3-1.jpg",
      title: "Whimsical Dreams",
      description: "An artistic depiction of serenity and imagination.",
      author: "Mia Wilson",
      alt: "Anime Style"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQDgcvjj2e4mBwRCoU-p0sqH3-A3OQ3J9sA&s",
      title: "Nature's Embrace",
      description: "A serene moment immersed in the beauty of nature.",
      author: "Ethan Brown",
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
