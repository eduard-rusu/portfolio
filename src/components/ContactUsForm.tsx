import { useState } from "react"

function ContactUsForm() {
    const [_, setName] = useState<string>("")

    const handleOnSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault()
    }

    const handleOnNameChange = () => {
        let timeout: number;

        return (e: any) => {
            if (timeout) {
                clearTimeout(timeout)
            }
            timeout = setTimeout(() => {
                setName(e.target.value)
            }, 200)
        }
    }

    return (
        <form>
            <label>
                First Name:
                <input type="text" name="First Name" onChange={handleOnNameChange()}/>
            </label>
            <label>
                Last Name:
                <input type="text" name="Last Name" onChange={handleOnNameChange()}/>
            </label>
            <label>
                Email:
                <input type="text" name="Email" onChange={handleOnNameChange()}/>
            </label>
            <label>
                Message:
                <input type="text" name="Message" onChange={handleOnNameChange()}/>
            </label>
            <input type="submit" onClick={handleOnSubmit}/>
        </form>
    )
}

export default ContactUsForm