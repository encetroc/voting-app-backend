import { Request, Response } from 'express'
import { proposalService } from '../services'

const getAllProposals = (req: Request, res: Response) => {
  res.send('Get all Proposals')
}

const getOneProposal = (req: Request, res: Response) => {
  res.send('Get an existing Proposal')
}

const createNewProposal = (req: Request, res: Response) => {
  res.send('Create a new Proposal')
}

const updateOneProposal = (req: Request, res: Response) => {
  res.send('Update an existing Proposal')
}

const deleteOneProposal = (req: Request, res: Response) => {
  res.send('Delete an existing Proposal')
}

export const proposalController = {
  getAllProposals,
  getOneProposal,
  createNewProposal,
  updateOneProposal,
  deleteOneProposal,
}
