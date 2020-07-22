import React, { useState } from "react"
import { useFormik } from "formik"
import * as yup from "yup"
import contactStyles from "./contactme.module.scss"
import styled from "@emotion/styled"
import HashLoader from "react-spinners/HashLoader"

const ContactMe = () => {
  const [formStatus, setFormStatus] = useState("")
  const [fetchError, setFetchError] = useState(null)

  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
  })

  let schema = yup.object().shape({
    email: yup.string().required().email(),
    subject: yup.string().required(),
    message: yup.string().required(),
  })

  const submit = async () => {
    setFormStatus("loading")
    try {
      let valid = await schema.isValid({
        email: formik.values.email,
        subject: formik.values.subject,
        message: formik.values.message,
      })
      if (valid) {
        setFormStatus("valid")
        try {
          const res = await fetch(
            "https://bamdmwhfmb.execute-api.us-east-1.amazonaws.com/default/portfolioEmail",
            {
              method: "POST",
              mode: "cors",
              headers: {
                "x-api-key": "4t5ITG50DH5whV1GNgz3y6PH0NftrY8U75iE5fiM",
              },
              body: {
                email: formik.values.email,
                subject: formik.values.subject,
                body: formik.values.body,
              },
            },
          )
          setFetchError(false)
        } catch (error) {
          setFetchError(true)
        }
      } else {
        setFormStatus("invalid")
      }
    } catch (error) {
      setFormStatus("error")
    }
  }

  return (
    <div className={contactStyles.container}>
      <div className={contactStyles.card}>
        <h1 className={contactStyles.header}>Lets get in touch!</h1>
        <FormContainer>
          <Input
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
            name="email"
            type="email"
          />
          <Input
            label="Subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            id="subject"
            name="subject"
            type="text"
          />
          <Input
            label="Message"
            multiline
            value={formik.values.message}
            onChange={formik.handleChange}
            id="message"
            name="message"
            type="text"
          />
          <Button
            onClick={submit}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {formStatus === "loading" ? (
              <HashLoader loading={true} size={25} color="#fff" />
            ) : (
              "Submit"
            )}
          </Button>
        </FormContainer>
      </div>
    </div>
  )
}

const Input = props => {
  const [focused, setFocused] = useState(false)
  const { label, multiline, value } = props

  return (
    <div
      className={contactStyles.input}
      style={props.multiline && { minHeight: "40%" }}
    >
      <Label focused={focused} value={value}>
        {label}
      </Label>
      {multiline ? (
        <textarea
          {...props}
          value={value}
          className={contactStyles.inputField}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          {...props}
          value={value}
          className={contactStyles.inputField}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
    </div>
  )
}

const FormContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Label = styled.p`
  position: absolute;
  transform: translateY(
    ${props => (props.focused || props.value ? "-60px" : "-15px")}
  );
  font-size: ${props => (props.focused || props.value ? "24px" : "20px")};
  color: #${props => (props.focused || props.value ? "000" : "b7b7b7")};
  margin-left: 1rem;
  pointer-events: none;
  transition: all 150ms ease-in;

  @media screen and(600px) {
    font-size: ${props => (props.focused || props.value ? "18px" : "14px")};
    transform: translateY(
      ${props => (props.focused || props.value ? "-50px" : "-15px")}
    );
  }
`

const Button = styled.button`
  border: 0;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: #aaa;
  box-shadow: 0px 7px 23px 1px rgba(170, 170, 170, 0.5);
  color: #fff;
  margin-top: 50px;
  padding: 15px;
  transition: 0.25s;
  &:hover {
    background-color: #e87461;
    box-shadow: 0px 7px 23px 1px rgba(232, 115, 97, 0.5);
    transform: scale(1.1);
  }
`

export default ContactMe
