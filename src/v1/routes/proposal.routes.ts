import { Router } from 'express'
import { proposalController } from '../controllers'

export const router = Router()

const {
  getAllProposals,
  getOneProposal,
  createNewProposal,
  updateOneProposal,
  deleteOneProposal,
} = proposalController

router.get('/', getAllProposals)

router.get('/:proposalId', getOneProposal)

router.post('/', createNewProposal)

router.patch('/:proposalId', updateOneProposal)

router.delete('/:proposalId', deleteOneProposal)
