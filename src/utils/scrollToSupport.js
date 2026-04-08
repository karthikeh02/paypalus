export function scrollToSupport(e) {
  e.preventDefault()
  const el = document.getElementById('supportbtn')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.href = '/'
  }
}
