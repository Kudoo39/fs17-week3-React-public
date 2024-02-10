import { useFormik } from 'formik'
import * as Yup from 'yup'
import './Subscription.css'

const Subscription = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      password: '',
      confirmedPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required').min(4, 'Must be 4 or more characters'),
      email: Yup.string()
        .required('Required')
        .matches(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/, 'Please enter a valid email address'),
      password: Yup.string()
        .required('Required')
        .matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/, 'More than 8 characters, contain one uppercase letter and a digit'),
      confirmedPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password')], 'Password must match'),
      phone: Yup.string()
        .required('Required')
        .matches(/^\+?[0-9]{0,3}[-\s]?\(?[0-9]{3}\)?[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/, 'Must be a valid phone number')
    }),
    onSubmit: (value, { resetForm }) => {
      window.alert('Form submitted')
      console.log(value)

      resetForm()
    }
  })

  return (
    <section className="super__form__container">
      <div className="form__title">Subscription</div>
      <form className="form__container" onSubmit={formik.handleSubmit}>
        <label htmlFor="" className="form__label">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
          className="form__input"
        />
        {!formik.errors.name && <p className="form__invisible"></p>}
        {formik.errors.name && <p className="form__error">{formik.errors.name}</p>}

        <label htmlFor="" className="form__label">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
          className="form__input"
        />
        {!formik.errors.email && <p className="form__invisible"></p>}
        {formik.errors.email && <p className="form__error">{formik.errors.email}</p>}

        <label htmlFor="" className="form__label">
          Password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
          className="form__input"
        />
        {!formik.errors.password && <p className="form__invisible"></p>}
        {formik.errors.password && <p className="form__error">{formik.errors.password}</p>}

        <label htmlFor="" className="form__label">
          Confirmed password
        </label>
        <input
          type="text"
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          placeholder="Confirm your password"
          className="form__input"
        />
        {!formik.errors.confirmedPassword && <p className="form__invisible"></p>}
        {formik.errors.confirmedPassword && <p className="form__error">{formik.errors.confirmedPassword}</p>}

        <label htmlFor="" className="form__label">
          Phone number
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Enter your phone number"
          className="form__input"
        />
        {!formik.errors.phone && <p className="form__invisible"></p>}
        {formik.errors.phone && <p className="form__error">{formik.errors.phone}</p>}

        <button type="submit" className="form__button">
          <span>Subscribe</span>
        </button>
      </form>
    </section>
  )
}

export default Subscription
