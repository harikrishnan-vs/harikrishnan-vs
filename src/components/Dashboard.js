'use client'
import { useEffect, useState } from 'react'

const Dashboard = ({ maxSelect }) => {
  const [svgContent, setSvgContent] = useState('')
  const [selectedRects, setSelectedRects] = useState([])

  useEffect(() => {
    fetch('https://s3.1boxoffice.com/backend-uploads/stadium/maps/user-uploads/newcastle-united-st-james-park-svg-1696426294.svg')
      .then(res => res.text())
      .then(setSvgContent)
  }, [])

  useEffect(() => {
    const svgElement = document.getElementById('stadium-map')
    if (!svgElement) return

    const rects = svgElement.querySelectorAll('rect')

    rects.forEach(rect => {
      rect.style.cursor = 'pointer'
      rect.addEventListener('mouseenter', () => {
        rect.style.fill = '#38bdf8' // hover color
      })
      rect.addEventListener('mouseleave', () => {
        if (!selectedRects.includes(rect)) rect.style.fill = ''
      })
      rect.addEventListener('click', () => {
        if (selectedRects.includes(rect)) {
          rect.style.fill = ''
          setSelectedRects(prev => prev.filter(r => r !== rect))
        } else if (selectedRects.length < (maxSelect || 1000)) {
          rect.style.fill = '#1e40af' // selected color
          setSelectedRects(prev => [...prev, rect])
        }
      })
    })
  }, [svgContent, selectedRects, maxSelect])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Choose Your Seats</h2>
      <div
        id="svg-container"
        dangerouslySetInnerHTML={{ __html: svgContent }}
        className="w-full overflow-auto border p-4 bg-white shadow rounded"
      />
    </div>
  )
}

export default Dashboard
