import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skPD7DG1RB3tBnvq107KRWJ79LYozvCZuU78rAPInoV6JLBeEgH4Yo1joZPy3Nbr7ghQQm2p2fRzcAjePEoCWyKXa68tihq4tzCYNJh9TtteMpsmwkfq2qwmJsNfsnsTr6vogYheCNA4ZLhKzRi9CkHcG1FDRwIsn9WMsV5evHrx77V8XaUR",
})
