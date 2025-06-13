import { Request, Response, NextFunction } from 'express';

export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const role = (req.user as any)?.role;

    if (!allowedRoles.includes(role)) {
      res.status(403).json({ message: 'Access denied' });
      return;
    }

    next();
  };
};
