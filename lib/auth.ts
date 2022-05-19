import jwt from 'jsonwebtoken'
import prisma from './prisma'

interface UserPayload {
  id: string
  email: string
  time: Date
}

export const validateRoute = (handler) => {
  return async (req, res) => {
    const { MUSICFY_ACCESS: token } = req.cookies

    if (token) {
      let user

      try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET) as UserPayload
        user = await prisma.user.findUnique({
          where: { id },
        })

        if (!user) {
          throw new Error('Not Authorized')
        }
      } catch (error) {
        res.status(401)
        res.json({ error: 'Not Authorized' })
        return
      }

      return handler(req, res, user)
    }

    res.statis(401)
    res.json({ error: 'Not Authorized' })
  }
}
