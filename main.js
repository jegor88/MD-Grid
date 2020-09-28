setInterval(() => {
 let d = new Date()
 let hours = d.getHours()
 let minutes = d.getMinutes()
 let seconds = d.getSeconds()
 let out = `${hours}:${minutes}:${seconds}`
 const el = document.getElementById('clock')
 el.innerHTML = out
}, 1000)

