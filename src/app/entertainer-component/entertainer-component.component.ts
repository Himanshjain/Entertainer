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

  constructor(private fb: FormBuilder, private http: HttpClient) {

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
      localStorage.setItem('UserInfoList', '[{"id":"","Name":"Neha Dugar","age":26,"gender":"female","height":"5.2","weight":"48","bio":"Software Engineer","nationality":"Indian","instaprofile":"https://www.instagram.com/nehadugar17/","profession1":"Software Developer","profession2":"","email":"nehadugar17@gmail.com","password":"admin","profilephotolink":"https://lh3.googleusercontent.com/pw/AMWts8B9daw6MVuBLB_IHVgvyV16JL0jHqqj38_7RbTQjIstTOe6RmmkamR-ScosF_EIRalnHM5qKqm23CNMaKEE-vsOBAL5LQmKYq0aX3R87MFqZqJ6-l_xtRXXoP_qOxJFErILo1S9FpbpICBtfORqsEfMQw=w524-h695-s-no?authuser=0"},{"id":"","Name":"Himansh","age":26,"gender":"male","height":"5.10","weight":"68","bio":"Technology Analyst","nationality":"Indian","instaprofile":"https://www.instagram.com/himonshh/","profession1":"Software Developer","profession2":"","email":"him2696@gmail.com","password":"admin","profilephotolink":"https://lh3.googleusercontent.com/G43ORT6aUsmc6kH--sq8jkEp25kcHyHpQWrCbtvd48WvmT__SGHDWTeaNI5sgzZY45JsNeruIvm4gG5SyiuMfNoTzgJ87FGJi3BfRRa8MMwLGsge_lSqFq2Yem2Hpabr7E9ZvY0LQcQLHZCGHA719usP7IARFAjC5x3fkpCdrf8sHNFHplUcY4SMtblQqZsw9XSpZrxrjKAQDljvrRKptB0ZpgFlitXqGW6dKI91KlaGyk4NwOZ0f3p7rK4E-gPJdrWWsqayGTFU46lFYzytbL59wl0RCoLMPTTDurnlkuuZ7ZMbnUMsGUrrfxDPwfs3wu0iU8l_G-ttp7eDHAiPApWynWd-9Qt5IUKGZ4K_p4OmU3HKKvpDzsjd3bJZJpOPBGwDCNqXt-rhdhbMDyghaUAYqutwRJv8iKQhlSIoZXeSZ24Afd3X8e41Zhm21_I6CZhnWVXsn0nmifoEzahtXt7rCt1XhTYGfzqbw8pwylHt23yS1vTELjrda45iGE-aWD2Z2D385dcpCqcHvtzQYsok0xDdABTDCMUYLsh3elPl7K8cpqiRbh-YFlamYaSsdVOn-cr4LLtbIvM2eyvvBOB5Yn-0KJraRvxeBXiVZj6C8O-iiP3_SqqO6Aqzgw_8HqvHr3eb3a705EEZgHojApPqNYmeMO3ZSMhypcAVHWdY3Frv-h4-7BTVpUE18q-q7UDvvhn_5fslHWWvjfHt0kS3i1VOoF9U4_INB36Yhjyve3uYfLOKCXG2JwF_y2FCD-HziG3gujMWO82VboHBnFZA6uA47mFuW1ElduSuNPFM3Otj6MG0m-I2e8TAu1r32vWUjpz2c0kTiEJ2AWfRirEu8OrNESE73-n_eSjWNy-YNPrDaOI7xay_zRM9eC1zdzQ0EUdz75GHgY02rGhRFlLF-Z9l_LKK1iLr00cJHfA9S1-t=w521-h695-s-no?authuser=0"}]')
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
      password: [''],
      profilephotolink: [''],
    });
  }



  onSubmit() {
    this.userInformation = {
      id: '',
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
      email: this.personForm.controls['email'].value,
      password: this.personForm.controls['password'].value,
      profilephotolink: this.personForm.controls['profilephotolink'].value
    }


    this.userInformationList.push(this.userInformation);
    localStorage.setItem('UserInfoList', JSON.stringify(this.userInformationList));
    this.userInformationList = JSON.parse(localStorage.getItem('UserInfoList') || '{}');

  }

  onDelete(obj: any) {
    const index = this.userInformationList.indexOf(obj, 0);
    if (index > -1) {
      this.userInformationList.splice(index, 1);
    }
    localStorage.setItem('UserInfoList', JSON.stringify(this.userInformationList));
  }

  onEdit(obj: any)
  {
      this.personForm.patchValue({
        name: obj['Name'],
        age: obj['age'],
        gender: obj['gender'],
        height: obj['height'],
        weight: obj['weight'],
        bio: obj['bio'],
        nationality: obj['nationality'],
        image: obj['instaprofile'],
        profession1: obj['profession1'],
        profession2: obj['profession2'],
        email: obj['email'],
        password: obj['password'],
        profilephotolink: obj['profilephotolink']
      })
       this.personForm.updateValueAndValidity();
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




