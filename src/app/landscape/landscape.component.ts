import { Component } from '@angular/core';

@Component({
  selector: 'app-landscape',
  templateUrl: './landscape.component.html',
  styleUrls: ['./landscape.component.css']
})
export class LandscapeComponent {
  landscapeImages = [
    {
      src: "https://www.stockvault.net/data/2011/09/25/127092/thumb16.jpg",
      title: "Majestic Mountain View",
      description: "A breathtaking view of towering peaks and lush valleys.",
      author: "David Johnson",
      alt: "Mountain Landscape"
    },
    {
      src: "https://cdn.pixabay.com/photo/2023/12/15/22/37/mountains-8451480_1280.jpg",
      title: "Golden Glow on Peaks",
      description: "The sun sets, casting a golden hue over majestic mountains.",
      author: "John Doe",
      alt: "Sunlit Peaks"
    },
    {
      src: "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg",
      title: "Nature's Palette",
      description: "A vivid display of colors in a serene natural setting.",
      author: "Emily Smith",
      alt: "Vivid Landscape"
    },
    {
      src: "https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/StandardImage/cape-woolami-sunstar-sunset1.jpg",
      title: "Sunset by the Shore",
      description: "Golden rays reflecting off gentle waves at dusk.",
      author: "Michael Brown",
      alt: "Beach Sunset"
    },
    {
      src: "https://i1.adis.ws/i/canon/get-inspired-landscape-photography-tips-2_ff75ec537e43471e872f65aef05f5bb4?$media-collection-half-dt-jpg$",
      title: "Tranquil Stream",
      description: "A peaceful mountain stream flowing through lush greenery.",
      author: "Sarah Thompson",
      alt: "Mountain Stream"
    },
    {
      src: "https://cloudfront.slrlounge.com/wp-content/uploads/2022/07/landscape-photography-with-zoner-photo-studio-x-12.jpg",
      title: "Misty Morning Calm",
      description: "A serene scene bathed in soft morning mist.",
      author: "Olivia Martinez",
      alt: "Hazy Morning"
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/5893534986e6c00851e56dbb/1491928306372-VQNBXYFJOMSC84SDRMMT/Kids+at+Mormon+Row.jpg",
      title: "Rustic Charm",
      description: "An idyllic countryside view featuring a vintage barn.",
      author: "Daniel Carter",
      alt: "Rustic Barn"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjWCsE4r-quVRtWSoNTqk_sTyahorxZRBiQ&s",
      title: "Celestial Wonders",
      description: "A dazzling display of stars against the night sky.",
      author: "Sophia Wilson",
      alt: "Starlit Sky"
    },
    {
      src: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/18725/images/YQ3lMcYoSV2SSPpSpezv_Winterlandscape-4.jpg",
      title: "Winter's Embrace",
      description: "A serene snowy landscape, perfect for a winter escape.",
      author: "William Anderson",
      alt: "Snowy Scene"
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
