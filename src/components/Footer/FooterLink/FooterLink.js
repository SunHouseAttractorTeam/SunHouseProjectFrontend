import React from 'react'

const FooterLink = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
)

export default FooterLink
