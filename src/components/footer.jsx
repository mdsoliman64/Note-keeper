import React from 'react'

function footer() {
  const time = new Date().getFullYear();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const second = new Date().getSeconds();
  return (
    <div class="col-lg-12">
    <p>{hours}: {minutes}:{second}- All Right Reserved - Md Soliman {time}</p>
</div>
  )
}

export default footer