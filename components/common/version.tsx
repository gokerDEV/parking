import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { BUY_ME_A_COFFEE, TECH_STACK, TTD } from '@/config/constants'
import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactElement, ReactNode } from 'react'

interface VersionProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  icon?: ReactNode
}

export default function Version({
  className = '',
  icon = (
    <span role="img" aria-label="checkmark">
      ✓
    </span>
  ),
}: VersionProps): ReactElement {
  const providerUrl =
    {
      github: `https://github.com/`,
      gitlab: `https://gitlab.com/`,
      bitbucket: `https://bitbucket.org/`,
    }[TTD?.provider] || 'https://github.com/'

  return (
    <div
      data-id="trustthedev"
      data-cy="Version"
      className={cn(
        'group fixed right-0 bottom-0 z-50 flex items-center',
        className,
      )}
    >
      <span className="bg-background/80 dark:bg-background/60 inline-flex cursor-pointer items-center gap-1 rounded-tl-lg p-1 py-0.5 text-[0.6rem] tracking-wide backdrop-blur-md">
        {icon}
        {TTD?.version}
      </span>

      <div
        className={cn(
          'pointer-events-auto invisible absolute right-0 bottom-full mb-2 w-screen max-w-[360px] px-2 font-mono opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 sm:w-[300px] sm:max-w-[90vw] xl:w-[360px]',
        )}
      >
        <Card className="bg-background/80 dark:bg-background/60 p-2.5 font-mono shadow-xl backdrop-blur-sm sm:p-4 xl:p-5">
          <CardDescription className="flex items-center justify-between text-[0.7rem] uppercase">
            <span>Package version: {TTD?.version}</span>{' '}
            <a href="/humans.txt" target="_blank" rel="noopener noreferrer">
              humans.txt
            </a>
          </CardDescription>
          <CardContent className="p-0 text-xs">
            <h4 className="text-muted-foreground mt-2 text-[0.7rem] uppercase">
              Project
            </h4>
            <div>
              <pre className="inline-block">Repo &nbsp;&nbsp;:</pre>{' '}
              <a
                href={`${providerUrl}/${TTD?.repoOwner}/${TTD?.repoSlug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="truncate"
              >
                {TTD?.repoSlug}
              </a>
            </div>
            <div>
              <pre className="inline-block">Owner &nbsp;:</pre>{' '}
              <a
                href={`${providerUrl}/${TTD?.repoOwner}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {TTD?.repoOwner}
              </a>
            </div>

            <h4 className="text-muted-foreground mt-2 text-[0.7rem] uppercase">
              Commit
            </h4>
            <div>
              <pre className="inline-block">Author :</pre>{' '}
              <a
                href={`${providerUrl}/${TTD?.commitAuthorLogin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {TTD?.commitAuthorName}
              </a>
            </div>
            <div>
              <pre className="inline-block">Build &nbsp;:</pre>{' '}
              <a
                href={`${providerUrl}/${TTD?.repoOwner}/${TTD?.repoSlug}/commit/${TTD?.commitRef}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {TTD?.commitRef}
              </a>
            </div>
            <div>
              <pre className="inline-block">Message:</pre>{' '}
              <a
                href={`${providerUrl}/${TTD?.repoOwner}/${TTD?.repoSlug}/commit/${TTD?.commitHash}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {TTD?.commitMessage}
              </a>
            </div>

            <h4 className="text-muted-foreground mt-2 text-[0.7rem] uppercase">
              Tech stack
            </h4>
            <div>{TECH_STACK}</div>

            <div className="right pt-3">
              <h4 className="text-muted-foreground text-right text-[0.66rem] leading-5 uppercase">
                <a
                  className="hover:underline"
                  href="https://trustthe.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ✓ Trust the developer and
                </a>{' '}
                <a
                  href={BUY_ME_A_COFFEE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-foreground/90 hover:bg-foreground text-background rounded-md p-0.5 px-1 whitespace-nowrap"
                >
                  buy me a coffee
                </a>
              </h4>
            </div>
          </CardContent>
        </Card>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: TTD?.commitAuthorName,
              url: `${providerUrl}/${TTD?.commitAuthorLogin}`,
              sameAs: [
                `${providerUrl}/${TTD?.commitAuthorLogin}`,
                'https://trustthe.dev',
              ],
              jobTitle: 'Developer',
              worksFor: {
                '@type': 'Organization',
                name: TTD?.repoOwner,
              },
            }),
          }}
        />
      </div>
    </div>
  )
}
