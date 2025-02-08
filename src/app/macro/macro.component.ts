import { Component } from '@angular/core';

@Component({
  selector: 'app-macro',
  templateUrl: './macro.component.html',
  styleUrls: ['./macro.component.css']
})
export class MacroComponent {
  macroImages = [
    {
      src: "https://media.greatbigphotographyworld.com/wp-content/uploads/2022/12/beautiful-macro-nature-scene.jpg",
      title: "Nature’s Intricate Beauty",
      description: "A mesmerizing close-up of nature’s delicate details.",
      author: "John Doe",
      alt: "Nature Macro"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qdog_YAoo1tCpjKRswJO0mvDT8S-hVzvq_1S41kAM2iqeqzylQ_5jP6O0VkRnRIHnbI&usqp=CAU",
      title: "Radiant Joy",
      description: "A heartwarming smile that captures pure happiness.",
      author: "Jane Doe",
      alt: "Smiling Girl"
    },
    {
      src: "https://img.freepik.com/premium-photo/macro-photography-human-eye_22736-2843.jpg",
      title: "Window to the Soul",
      description: "A striking macro shot showcasing the depth of the human eye.",
      author: "Alex Smith",
      alt: "Eye Macro"
    },
    {
      src: "https://learnandsupport.getolympus.com/sites/default/files/styles/hero_large/public/2020-10/amico_-_water_droplets_1.jpg?itok=kJ972xkJ",
      title: "Nature’s Sparkling Jewels",
      description: "Water droplets glistening in the light, revealing their beauty.",
      author: "Sam Wilson",
      alt: "Water Droplets"
    },
    {
      src: "https://theartofmacrophotography.wordpress.com/wp-content/uploads/2012/02/leaf-with-water-droplets-on-edges-liz-mackney.jpg",
      title: "Dew-Kissed Elegance",
      description: "Tiny water droplets resting on a leaf, nature’s morning art.",
      author: "Patricia Green",
      alt: "Leaf with Water Drops"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacUfmjPdcoFTB_qaqV9H66TQD4IwBR9_qCw&s",
      title: "Eyes Full of Wonder",
      description: "A young girl’s curious gaze reflecting endless possibilities.",
      author: "Chris Brown",
      alt: "Curious Girl"
    },
    {
      src: "https://media.istockphoto.com/id/1282901961/photo/close-up-view-of-a-drops-of-water.jpg?s=612x612&w=is&k=20&c=HSXICTqh1PC3KDO2jSjRfVrcfZhvUJu7kQviZIvtNsU=",
      title: "Crystal Clear Perfection",
      description: "A magnified view of a single droplet, nature’s purity in focus.",
      author: "Ella White",
      alt: "Water Droplet"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALhBBU1aOSMU2Omw3dY_vmUnNt6Wtve-Dow&s",
      title: "Dreamlike Fantasy",
      description: "An artistic vision merging reality with imagination.",
      author: "Oliver Black",
      alt: "Anime-Inspired Art"
    },
    {
      src: "https://thumbs.dreamstime.com/b/camera-lens-shown-colorful-abstract-setting-surrounded-blurry-background-which-gives-impression-dreamy-surreal-340254735.jpg",
      title: "Through the Lens",
      description: "A vibrant abstract image capturing the art of photography.",
      author: "Sophia Grey",
      alt: "Camera Lens Art"
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
