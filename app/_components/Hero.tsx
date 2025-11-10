
"use client"

import { Button } from '@/components/ui/button'
import { ArrowUp, ImagePlay, Sparkles , LayoutDashboard, User, Key, HomeIcon,} from 'lucide-react'
import  { useState } from 'react'


const designSuggestions = [
  {
    label: 'Dashboard',
    prompt: 'Create an analytics dashboard to track customers and revenue data for a SaaS',
    icon: LayoutDashboard
  },
  {
    label: 'Signup Form',
    prompt: 'Create a modern sign up form with email/password fields, Google and Github login options, and terms checkbox',
    icon: Key
  },
  {
    label: 'Hero',
    prompt: 'Create a modern header and centered hero section for a productivity SaaS. Include a badge for feature announcement, a title with a subtle gradient effect, subtitle, CTA, small social proof and an image',
    icon: HomeIcon
  },
  {
    label: 'User Profile Card',
    prompt: 'Create a modern user profile card component for a social media website',
    icon: User
  }
]

function Hero() {

    const [userInput, setUserInput ]= useState<string>()


  return (
    <div className='max-w-6xl mx-auto text-center px-4 py-8'>
      {/* Header and descriptions */}
      <div className='mb-8'>
        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6'>
          <Sparkles className='w-4 h-4' />
          <span className='text-sm font-medium'>AI-Powered Design</span>
        </div>
        <h1 className='text-4xl md:text-6xl font-bold tracking-tight mb-6'>
          What should be{' '}
          <span className=''>
            Designed?
          </span>
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
          Generate, edit, and explore designs with AI. Export clean, production-ready code.
        </p>
      </div>

      {/* Input box */}
{/* Input box */}
<div className='max-w-2xl mx-auto p-4'>
  <div className='bg-gray-50 rounded-lg p-4'>
    <div className='relative'>
                      <textarea 
                          value={userInput}
                          onChange={(event)=>setUserInput(event.target.value)}
        placeholder='Describe your page design... (e.g., "A modern landing page for a SaaS product with dark theme")'
        className='w-full h-32 p-4 pr-24 pl-24 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-primary  bg-white'
      />
      <div className='absolute bottom-4 left-4'>
        <Button variant="outline" size="icon" className='h-10 w-10'>
          <ImagePlay className='w-4 h-4' />
        </Button>
      </div>
      <div className='absolute bottom-4 right-4'>
        <Button size="icon" className='h-10 w-10'>
          <ArrowUp className='w-4 h-4' />
        </Button>
      </div>
    </div>
  </div>
</div>
          {/* Suggestion list */}
<div className='flex flex-wrap justify-center gap-3 max-w-2xl mx-auto'>
  {designSuggestions.map((suggestion, index) => (
      <Button key={index} variant="outline" size="sm" className='rounded-lg'
      onClick={()=> setUserInput(suggestion.prompt)}
      >
      <suggestion.icon/>
          {suggestion.label}
    </Button>
  ))}
</div>
      
    </div>
  )
}

export default Hero