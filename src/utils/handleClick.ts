
export const handleLinkClick = (href: string) => {
  const el = document.getElementById(href.substring(1))
  if (el instanceof HTMLElement) {
    const offsetTop = el.offsetTop
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    })
  }
}
