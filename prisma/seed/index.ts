import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function main() {

  console.log('limpando banco de dados...')

  await prisma.bot.deleteMany({})
  await prisma.employee.deleteMany({})
  await prisma.company.deleteMany({})

  console.log('criando empresa e funcionario root...')
  const { id_company } = await prisma.company.create({
    data: {
      name: 'root',
      cnpj: '00000000000000',
      slug: 'root'
    }
  })

  console.log('criando funcionario root...')

  await prisma.employee.create({
    data: {
      company: {
        connect: {
          id_company
        }
      },
      name: 'root',
      email: 'adm@adm.com',
      password: '123456',
      salt: '123456',
      roles: 'adm'
    }
  })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })