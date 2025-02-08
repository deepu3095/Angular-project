import { Component } from '@angular/core';

@Component({
  selector: 'app-wildlife',
  templateUrl: './wildlife.component.html',
  styleUrls: ['./wildlife.component.css']
})
export class WildlifeComponent {
  wildlifeImages = [
    {
      src: "https://cc-prod.scene7.com/is/image/CCProdAuthor/marquee-wildlife-photography-900%C3%97420?$pjpeg$&jpegSize=200&wid=900",
      title: "Wildlife in Harmony",
      description: "A breathtaking view of animals in their natural habitat.",
      author: "James Anderson",
      alt: "Wildlife Landscape"
    },
    {
      src: "https://www.secretatlas.com/wp-content/uploads/2021/07/yala-sri-lankayellowstone_50-best-wildlife-photography-locations.jpg",
      title: "The Call of the Wild",
      description: "Explore the beauty of wildlife in untamed surroundings.",
      author: "Sophia Roberts",
      alt: "Wildlife Safari"
    },
    {
      src: "https://learnandsupport.getolympus.com/sites/default/files/images/2023/08/CLOUD-2%205.jpg",
      title: "Majestic Flight",
      description: "An eagle soaring gracefully through the sky.",
      author: "Olivia Martinez",
      alt: "Eagle in Flight"
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/5683aff9a12f443fdcd7b3a0/1635243452143-FSZOT5I39GA4LTF0QQVW/ethics-of-wildlife-photography-squirrel.jpg",
      title: "Life Among the Trees",
      description: "A playful squirrel thriving in its leafy home.",
      author: "David Miller",
      alt: "Squirrel on a Tree"
    },
    {
      src: "https://www.richardpeters.co.uk/wp-content/uploads/2016/09/23-10215-post/Family_Life_Richard_Peters_Remebering_Elephants.jpg",
      title: "Gentle Giants",
      description: "A heartwarming scene of elephant family life.",
      author: "Emma Johnson",
      alt: "Elephants"
    },
    {
      src: "https://assets.newatlas.com/dims4/default/194d42b/2147483647/strip/true/crop/1280x853+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F57%2Feb%2Fd1be81f047e5ac1c5ca7912db3b3%2Fd54b93f5-c769-4551-9696-7fa5e3c763a3.jpg",
      title: "Winter Watch",
      description: "A fox gazes through the snowy landscape.",
      author: "Liam Davis",
      alt: "Fox in the Snow"
    },
    {
      src: "https://pngadgilandsons.com/wp-content/uploads/2018/09/nitin-jain-photography-image2-1.jpg",
      title: "King of the Jungle",
      description: "The tiger reigns supreme amidst the lush greenery.",
      author: "Mia Wilson",
      alt: "Tiger in Jungle"
    },
    {
      src: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?cs=srgb&dl=pexels-pixabay-247376.jpg&fm=jpg",
      title: "Gentle Roamers",
      description: "Deer peacefully grazing in their natural habitat.",
      author: "Ethan Brown",
      alt: "Deer in the Wild"
    },
    {
      src: "https://littleaffairsariska.com/blog/wp-content/uploads/2023/07/Wildlife-Photography.webp",
      title: "Jungle Majesty",
      description: "A glimpse into the untamed beauty of the jungle.",
      author: "Noah Carter",
      alt: "Jungle Landscape"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9It3ys7Tb5e56rx4hVIRCfqDcUSGMO1_IV5Y3Ud1cA44-e4P7WCQNRsmEFNeZHqJaoGE&usqp=CAU",
      title: "Savannah Sunset",
      description: "A golden hour scene over the vast savannah.",
      author: "Olivia Martinez",
      alt: "Sunset Over Savannah"
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
