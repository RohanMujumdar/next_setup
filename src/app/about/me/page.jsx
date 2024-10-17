import { Card } from '@/components/ui/card'
import React from 'react'

function page() {
  return (
    <div>
     <Card>
        <h2 className="text-xl font-bold mb-4">I am a Card</h2>
        <p>This is some content inside the card.</p>
    </Card>
    </div>
  )
}

export default page
