import React from 'react';
import {DevTool} from '@hookform/devtools'
import '../../css/TodoForm.css';
import {useForm} from 'react-hook-form'

type formvalue= {
  username:string,
  
  email:string,
  message:string,
  
}
export default function RequestForm() {
  const  form = useForm<formvalue>() ;
  const  { register, control,handleSubmit} = form;

  const handleSubmit1=  (data:formvalue) => {
    console.log(data)
  }

  return (
    <div className="request-form-wrapper">
      <form className="request-form" onSubmit={handleSubmit(handleSubmit1)} noValidate>
        <h2 className="form-title">Contact Us</h2>

        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-input"   
            placeholder="Enter your name"
            {...register("username",{required :"user name is required"})}
          />   
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
  
            type="email"
            className="form-input"
            placeholder="Enter your email"
            {...register("email",{required :"email  is required"})}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea
            rows={4}
            className="form-input"
            placeholder="Type your message..."
            {...register("message",{required :"message is required"})}
          />
        </div>

        <button id="fuckbutton" type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      <DevTool control={control}/>
    </div>
  );
}
