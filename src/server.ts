import express from 'express'
import { v1ProposalRouter } from './v1/routes'

const app = express()

app.use('/api/v1/proposals', v1ProposalRouter)

app.listen(4000, () => console.log('app started on port 4000'))
