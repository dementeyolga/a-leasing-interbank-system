import { CheckboxInput } from '@/components/checkbox/checkbox'
import { RadioGroupInput } from '@/components/radio-group/radio-group'
import { SelectInput } from '@/components/select/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main className="container mx-auto my-10 px-5">
      <div className="max-w-[206px] space-y-4">
        <Button variant={'outline'}>Данные неверны</Button>
        <Button>Подписать документ онлайн</Button>
        <Input type="text" placeholder="Стоимость" />
        <SelectInput
          placeholder="Предмет лизинга"
          values={[
            'Предмет лизинга 1',
            'Предмет лизинга 2',
            'Предмет лизинга 3',
            'Очень-очень длинное название',
            'Предмет лизинга 4',
            'Предмет лизинга 5',
            'Предмет лизинга 6',
            'Предмет лизинга 7',
            'Предмет лизинга 8',
            'Предмет лизинга 9',
            'Предмет лизинга 0',
          ]}
        />
        <SelectInput
          placeholder="Предмет лизинга"
          values={[
            'Предмет лизинга 1',
            'Предмет лизинга 2',
            'Предмет лизинга 3',
          ]}
        />
      </div>

      <div className="mt-4 grid max-w-[350px] grid-cols-1 gap-4">
        <CheckboxInput
          id="agree"
          text={`С Перечнем вознаграждений ООО «А-Лизинг» за оказание услуг ознакомлен *`}
        />

        <RadioGroupInput
          items={[
            {
              id: 'own-car-1',
              value: 'есть автомобиль в собственности',
              text: 'да',
            },
            {
              id: 'own-car-2',
              value: 'нет автомобиля в собственности',
              text: 'нет',
            },
          ]}
        />
      </div>
    </main>
  )
}
