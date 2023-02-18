import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserInfo } from 'src/models/UserInfo-model';

@Component({
  selector: 'app-entertainer-component',
  templateUrl: './entertainer-component.component.html',
  styleUrls: ['./entertainer-component.component.css']
})
export class EntertainerComponentComponent {

  userInformation!: UserInfo; 
  userInformationList: Array<UserInfo> = [];
  personForm: FormGroup;

  constructor(private fb: FormBuilder , private http: HttpClient) {

    if (localStorage.getItem('UserInfoList') !== null) {
      try {
        // parse the value retrieved from localStorage and store it in userInformationList
        this.userInformationList = JSON.parse(localStorage.getItem('UserInfoList') || '{}');
      } catch (e) {
        console.error('Error parsing user information list from localStorage:', e);
        // handle the error as appropriate
      }
    } else {
      // if 'UserInfoList' doesn't exist in localStorage, set it to an empty array
      localStorage.setItem('UserInfoList', JSON.stringify(this.userInformationList));
      localStorage.setItem('UserInfoList','[{"id":"","Name":"Himansh","age":26,"gender":"male","height":"5.11","weight":"68","bio":"Creator of Entertainer.com","nationality":"Indian","instaprofile":"https://www.instagram.com/himonshh/","profession1":"Software Developer","profession2":"Full stack Developer","email":"him2696@gmail.com","password":"admin","profilephotolink":"https://lh3.googleusercontent.com/pw/AMWts8Bqclv5Q94X__3xbKFhHUspfXohsC-11ctQXFepnPhBXNBM04st0Vqe6SzdycNXCcl6yV3MaEKtjX0JEfQcBYbI1X7TB9d2Hxo2jxkQu5MLVqoLxc4w9v-c-tDhyXsR4M7beD5WEefpr4neQ2G7iaxNbg=w522-h695-no"}]')
    }

    this.personForm = this.fb.group({
      name: ['', Validators.required],
      age: [''],
      gender: ['', Validators.required],
      height: [''],
      weight: [''],
      bio: [''],
      nationality: [''],
      image: [''],
      profession1: ['', Validators.required],
      profession2: [''],
      email: [''],
      password : [''],
      profilephotolink : [''],
    });
  }



  onSubmit() {
    this.userInformation = {
      id:'',
      Name: this.personForm.controls['name'].value,
      age: this.personForm.controls['age'].value,
      gender: this.personForm.controls['gender'].value,
      height: this.personForm.controls['height'].value,
      weight: this.personForm.controls['weight'].value,
      bio: this.personForm.controls['bio'].value,
      nationality: this.personForm.controls['nationality'].value,
      instaprofile: this.personForm.controls['image'].value,
      profession1: this.personForm.controls['profession1'].value,
      profession2: this.personForm.controls['profession2'].value,
      email :  this.personForm.controls['email'].value,
      password :  this.personForm.controls['password'].value,
      profilephotolink : this.personForm.controls['profilephotolink'].value
    }
   

    this.userInformationList.push(this.userInformation);
    localStorage.setItem('UserInfoList', JSON.stringify(this.userInformationList));
    this.userInformationList = JSON.parse(localStorage.getItem('UserInfoList') || '{}');
    
  }
  

  profession: string[] = [
    "Actor",
    "Actress",
    "Art Director",
    "Assistant Director",
    "Boom Operator",
    "Camera Operator",
    "Casting Director",
    "Choreographer",
    "Cinematographer",
    "Software Developer",
    "Web Developer",
    "UI Developer",
    "Full stack Developer",
    "Clapper Loader",
    "Colorist",
    "Composer",
    "Concept Artist",
    "Costume Designer",
    "Craft Service",
    "Dialogue Editor",
    "Director",
    "Director of Photography",
    "Dolly Grip",
    "Editor",
    "Foley Artist",
    "Gaffer",
    "Graphic Designer",
    "Grip",
    "Hair Stylist",
    "Illustrator",
    "Key Grip",
    "Landscape Artist",
    "Lighting Technician",
    "Line Producer",
    "Location Manager",
    "Makeup Artist",
    "Model Maker",
    "Music Supervisor",
    "Production Accountant",
    "Production Assistant",
    "Production Coordinator",
    "Production Designer",
    "Production Manager",
    "Prop Maker",
    "Prop Master",
    "Script Coordinator",
    "Script Supervisor",
    "Set Builder",
    "Set Decorator",
    "Set Designer",
    "Set Dresser",
    "Sound Designer",
    "Sound Editor",
    "Sound Mixer",
    "Special Effects Supervisor",
    "Steadicam Operator",
    "Still Photographer",
    "Storyboard Artist",
    "Stunt Coordinator",
    "Supervising Producer",
    "Swing Gang",
    "Unit Manager",
    "Visual Effects Supervisor",
    "Wardrobe Supervisor",
    "Writer",
    "Aerial Cinematographer",
    "Animal Trainer",
    "Armorer",
    "Assistant Camera",
    "Best Boy",
    "Cable Puller",
    "Carpenter",
    "Casting Assistant",
    "CG Artist",
    "Chef",
    "Cinematography",
    "Clean-Up Artist",
    "Client Liaison",
    "Color Timer",
    "Compositor",
    "Computer Graphics Supervisor",
    "Construction Coordinator",
    "Construction Manager",
    "Construction Supervisor",
    "Consulting Producer",
    "Costume Assistant",
    "Costume Coordinator",
    "Costume Supervisor",
    "Craft Service Assistant",
    "Creative Consultant",
    "Data Wrangler",
    "Development Executive",
    "Digital Imaging Technician",
    "Digital Intermediate Assistant",
    "Digital Intermediate Colorist",
    "Digital Supervisor",
    "Draughtsman",
    "Drone Operator",
    "Driver",
    "Electronic Press Kit Producer",
    "EPK Producer",
    "Extras Casting",
    "Fiber Optic Technician",
    "Film Developer",
    "Film Loader",
    "Film Producer",
    "Film Scanner",
    "Film Technician",
    "First Assistant Camera",
    "First Assistant Director",
    "Foley Editor",
    "Foley Mixer",
    "Foley Recordist",
    "Foley Supervisor",
    "Food Stylist",
    "Grip Assistant",
    "Hair Stylist Assistant",
    "Head Carpenter",
    "Head Painter",
    "Illustration",
    "Image Researcher",
    "Impressionist",
    "Key Hair Stylist",
    "Lead Animator",
    "Lead Carpenter",
    "Leadman",
    "Location Scout",
    "Location Sound",
    "Makeup Assistant",
    "Makeup Effects",
    "Makeup Supervisor",
    "Marine Coordinator",
    "Media Archivist",
    "Mix Technician",
    "Mocap Supervisor",
    "Background Dancer"
  ]


}




