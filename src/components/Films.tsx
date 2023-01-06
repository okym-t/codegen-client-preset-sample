/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { FC } from 'react'
import request from 'graphql-request'
import { useQuery } from 'react-query'
import { FragmentType, graphql } from '../gql'
import { Film, FilmFragment } from './Film'

const FilmsDocument = graphql(`
  query allFilmsWithVariablesQuery($first: Int!) {
    allFilms(first: $first) {
      edges {
        node {
          ...FilmItem
        }
      }
    }
  }
`)

export const Films: FC = () => {
  const { data } = useQuery(
    ['films'],
    async () =>
      await request(
        'https://swapi-graphql.netlify.app/.netlify/functions/index',
        FilmsDocument,
        {
          first: 10,
        }
      )
  )

  return (
    <>
      {data?.allFilms?.edges?.map((film, index) => (
        <Film
          key={index}
          film={film?.node as FragmentType<typeof FilmFragment>}
        />
      ))}
    </>
  )
}
