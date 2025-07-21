'use client'

import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { Badge } from '../ui/badge'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'

const projectsData = [
  {
    title: 'GroGo',
    description:
      'Grocery delivery app using React Native with Mapbox, Stripe, and microservices architecture with RabbitMQ communication.',
    imageURL: '/gorgo.png',
    github: 'https://github.com/mnnkhndlwl/kharido',
    live: 'https://github.com/mnnkhndlwl/kharido',
    icon: <IconClipboardCopy className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: 'CompilerXpress - Online IDE',
    description:
      'Innovative online IDE built with Node.js, Express.js, React.js, and Redux Toolkit. ',
    imageURL: '/compiler.png',
    github: 'https://github.com/mnnkhndlwl/CompilerXpress',
    live: 'https://github.com/mnnkhndlwl/CompilerXpress',
    icon: <IconFileBroken className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: 'Ludo Game',
    description:
      'Build a ludo game using react native and react redux with reanimated and typescript',
    imageURL: '/image.png',
    github: 'https://github.com/mnnkhndlwl/ludo_game',
    live: 'https://github.com/mnnkhndlwl/ludo_game',
    icon: <IconSignature className="h-4 w-4 text-muted-foreground" />,
  },
]

const LiveIndicator = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
  </span>
)

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text ">My Projects</h1>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-base font-semibold md:text-lg italic">
            A collection of innovative projects showcasing technical expertise & creativity.
          </p>
        </motion.div>
      </div>

      <BentoGrid className="max-w-5xl mx-auto">
        {projectsData.map((project, i) => (
          <BentoGridItem
            key={project.title}
            title={project.title}
            description={
              <div className="space-y-1 text-sm text-foreground">
                <p>{project.description}</p>
                <div className="flex gap-3">
                  <Badge asChild variant="secondary" className="gap-1 rounded-full">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <FaGithub className="size-3" />
                      GitHub
                    </a>
                  </Badge>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-0.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <LiveIndicator />
                    Live
                  </a>
                </div>
              </div>
            }
            header={
              <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                <Image
                  src={project.imageURL}
                  alt={project.title}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                  fill
                />
              </div>
            }
            icon={project.icon}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Projects
