import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreatePostService } from 'src/app/services/posts/create-post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  uploadForm: FormGroup;
  selectedSquare = 1;
  squares = [
    { value: 1, class: 'square-1' },
    { value: 2, class: 'square-2' },
    { value: 3, class: 'square-3' },
    { value: 4, class: 'square-4' },
    { value: 5, class: 'square-5' },
  ];

  constructor(
    private createPostService: CreatePostService,
    private formBuilder: FormBuilder
  ) {
    this.uploadForm = this.formBuilder.group({
      image: [null, Validators.required],
      title: ['', Validators.required],
      post_commentary: ['', Validators.required],
      image_frame: [1, Validators.required],
      image_name: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  choseFrame(square: any): void {
    this.selectedSquare = square.value;
    this.uploadForm.get('image_frame')!.setValue(this.selectedSquare);
  }

  selectFile(): void {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];
  
    if (selectedFile) {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.uploadForm.get('image')!.setValue(e.target.result);
        this.uploadForm.get('image_name')!.setValue(selectedFile.name);
      };
  
      reader.readAsDataURL(selectedFile);
    }
  }
  

  createPost(): void {
    if (this.uploadForm.valid) {
      this.createPostService.createNewPost(this.uploadForm.value);
    }
  }
}
