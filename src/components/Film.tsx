import { FC } from 'react'
import { FragmentType, graphql, useFragment } from '../gql'

export const FilmFragment = graphql(/* GraphQL */ `
  fragment FilmItem on Film {
    id
    title
    releaseDate
    producers
  }
`)

type Props = {
  film: FragmentType<typeof FilmFragment>
}

export const Film: FC<Props> = ({ film }) => {
  const filmFragment = useFragment(FilmFragment, film)

  return (
    <>
      <h3>{filmFragment.title}</h3>
      <p>{filmFragment.releaseDate}</p>
    </>
  )
}
