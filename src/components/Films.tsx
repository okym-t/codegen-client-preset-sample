/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { FC } from 'react'
import request from 'graphql-request'
import { useQuery } from 'react-query'
import { graphql } from '../gql'

const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
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
        allFilmsWithVariablesQueryDocument,
        {
          first: 10,
        }
      )
  )

  return <>{JSON.stringify(data?.allFilms)}</>
}
