"use client"
import { useState } from "react"
import styles from "./Components.module.css"

export default function ContactForm(){
    const [status,setStatus] = useState({state: "", msg:""})
    const [formData,setFormData] = useState({
        Name:"",
        Email:"",
        Phone:"",
        Package:"",
        Goal:"",
    })
    // const onChange = (e)=>{
    //     setFormData(e.currentTarget.name: e.currentTarget.value,...formData)
    // }
    const onSubmit= async(e)=>{
        
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const payload = Object.fromEntries(form.entries())
        console.log(payload)
        setStatus({ state: "loading", msg: "Sending…" });
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
        if (!res.ok) throw new Error("Request failed");
        setStatus({ state: "sent", msg: "Thanks! I’ll reply soon." });
        e.currentTarget.reset();
    } catch {
        setStatus({ state: "error", msg: "Couldn’t send. Try again?" });
    }
    }
    return(
        <form className={styles.form} onSubmit={onSubmit} style={{display:"flex",flexDirection:"column"}} >
            <label>
                <input className={styles.name} name="Name" placeholder="Name" type="text" required />
            </label>
            <label>
                <input className={styles.email} name="Email" placeholder="Email" type="text" required />
            </label>
            <label>
                <input className={styles.phone} name="Phone" placeholder="Phone #" type="text"  />
            </label>
            <label className={styles.package_label} htmlFor="Package">
                <select className={styles.package} name="Package" placeholder="Package"  required >
                    <option value="" disabled hidden selected >Select a package</option>
                    <option value="Boxing Sessions" >Boxing Sessions</option>
                    <option value="Wellness Sessions">Wellness Sessions</option>
                </select>
            </label>
            <label>
                <input className={styles.goal} style={{width:"100%"}}name="Goal" placeholder="Fitness Goal" />
            </label> 

            <button type="submit" >
                Reserve your free consolutation
            </button>           
        </form>
    )
}