import { useState } from 'react'
import { CONTACT, PROGRAMS } from '../data/content'
import styles from './BookingForm.module.css'

export default function BookingForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // 'success', 'error', or null

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email'

    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    else if (!/^[0-9\s\-\+\(\)]+$/.test(formData.phone))
      newErrors.phone = 'Please enter a valid phone number'

    if (!formData.program) newErrors.program = 'Please select a program'

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setStatus(null)

    try {
      const selectedProgram = PROGRAMS.find((p) => p.id === formData.program)

      const emailBody = `
New Booking Request from Pitch Partners Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Program: ${selectedProgram?.name}
Message: ${formData.message || '(No message)'}

Please follow up with the client.
      `.trim()

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@resend.dev',
          to: CONTACT.email,
          subject: `New Booking Request - ${formData.name}`,
          html: `
            <h2>New Booking Request</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Program:</strong> ${selectedProgram?.name}</p>
            <p><strong>Message:</strong> ${formData.message || '(No message)'}</p>
          `,
        }),
      })

      if (!response.ok) {
        throw new Error(`Email service error: ${response.statusText}`)
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', program: '', message: '' })

      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (error) {
      console.error('Booking submission error:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.successMessage}>
        <h3>Thank You!</h3>
        <p>Your booking request has been received. We'll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Book a Session</h2>
      <p className={styles.subtitle}>Tell us about yourself and your goals</p>

      <div className={styles.formGroup}>
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? styles.error : ''}
          placeholder="Your name"
        />
        {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? styles.error : ''}
          placeholder="your@email.com"
        />
        {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? styles.error : ''}
          placeholder="+1 (555) 000-0000"
        />
        {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="program">Program *</label>
        <select
          id="program"
          name="program"
          value={formData.program}
          onChange={handleChange}
          className={errors.program ? styles.error : ''}
        >
          <option value="">Select a program</option>
          {PROGRAMS.map((program) => (
            <option key={program.id} value={program.id}>
              {program.name}
            </option>
          ))}
        </select>
        {errors.program && <span className={styles.errorMsg}>{errors.program}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Message (Optional)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your football goals..."
          rows="4"
        />
      </div>

      {status === 'error' && (
        <div className={styles.errorAlert}>
          <p>Error sending booking request. Please try again or email us directly.</p>
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
      </button>
    </form>
  )
}
