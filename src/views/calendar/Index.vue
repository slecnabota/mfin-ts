<!-- <template>
   <div class="c-my-calendar">
      <div v-if="isOpen" class="invisible-close" @click="open"></div>
      <div class="date-place" @click="open">
         <span>{{ dateForView }}</span>
      </div>
      <div class="calendar">
         <div class="top year">
            <div class="dec" @click="year--">&#9660;</div>
            <div class="date"> {{ year }} </div>
            <div class="inc" @click="year++">&#9660;</div>
         </div>
         <div class="top">
            <div class="dec" @click="decrease">&#9660;</div>
            <div class="date"> {{ months[month] }} </div>
            <div class="inc" @click="increase">&#9660;</div>
         </div>
         <div class="header">
            <table>
               <tr>
                  <th v-for="(d, index) in day" :key="index" class="week-day">{{ d }}</th>
               </tr>
            </table>
         </div>
         <div class="table-wrapper">
            <table class="calendar-table">
               <tr v-for="(week, index) in calendar()" :key="index" class="week">
                  <td @click="chooseDay(week[1]?.index)">
                     <div class="number" :class="{ 'active': compareDate(week[1]?.index) }">
                        {{ week[1]?.index }}
                     </div>
                  </td>
                  <td @click="chooseDay(week[2]?.index)">
                     <div class="number" :class="{ 'active': compareDate(week[2]?.index) }">
                        {{ week[2]?.index }}
                     </div>
                  </td>
                  <td @click="chooseDay(week[3]?.index)">
                     <div class="number" :class="{ 'active': compareDate(week[3]?.index) }">
                        {{ week[3]?.index }}
                     </div>
                  </td>
                  <td @click="chooseDay(week[4]?.index)">
                     <div class="number" :class="{ 'active': compareDate(week[4]?.index) }">
                        {{ week[4]?.index }}
                     </div>
                  </td>
                  <td @click="chooseDay(week[5]?.index)">
                     <div class="number" :class="{ 'active': compareDate(week[5]?.index) }">
                        {{ week[5]?.index }}
                     </div>
                  </td>
                  <td @click="chooseDay(week[6]?.index)">
                     <div class="number" :class="{ 'active': compareDate(week[6]?.index) }">
                        {{ week[6]?.index }}
                     </div>
                  </td>
                  <td @click="chooseDay(week[0]?.index)">
                     <div class="number" :class="{ 'active': compareDate(week[0]?.index) }">
                        {{ week[0]?.index }}
                     </div>
                  </td>
               </tr>
            </table>
         </div>
      </div>
   </div>
</template>
 
<script lang="ts">
export default {
   name: 'CalendarIndex',
   props: {
      date: {
         type: Date,
         default: () => new Date(),
      },
      disabled: {
         type: Boolean,
         default: false,
      },
   },
   data() {
      return {
         month: new Date().getMonth(),
         year: new Date().getFullYear(),
         showMenu: false,
         localeDay: {
            ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',],
            kz: ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн', 'Жс',],
         },
         dateForView: '',
         day: [],
         cDate: new Date,
         localeMonths: {
            ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',],
            kz: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан',],
         },
         months: [],
         dlast: new Date(this.year, this.month + 1, 0).getDate(),
         isOpen: false,
      }
   },
   watch: {
      date() {
         this.init()
      },
      cDate() {
         this.updateView()
      },
   },
   created() {
      this.init()
   },
   methods: {
      open() {
         if (!this.disabled) {
            this.isOpen = !this.isOpen
         }
      },
      init() {
         const lang = 'ru'
         this.months = this.localeMonths[lang]
         this.day = this.localeDay[lang]
         this.cDate = this.date
         this.month = this.cDate.getMonth()
         this.year = this.cDate.getFullYear()
         this.updateView()
      },
      updateView() {
         if (this.month >= 0 && this.month < this.months.length) {
            this.dateForView = (this.cDate.getDate() <= 9 ? '0' + this.cDate.getDate() : this.cDate.getDate()) +
               ' ' + this.months[this.month].substr(0, 3) + '. ' + this.year;
         }
      },
      // chooseDay(day) {
      //    if (day) {
      //       this.cDate = new Date(this.year, this.month, day)
      //       this.$emit('update:value', new Date(this.year, this.month, day))
      //       this.$emit('change')
      //       this.isOpen = false
      //    }
      // },
      chooseDay(day) {
         if (day) {
            this.cDate = new Date(this.year, this.month, day);
            this.$emit('update:value', new Date(this.year, this.month, day));
            this.$emit('change');
            this.showMenu = true;
         }
      },
      compareDate(day, sign = '=') {
         const currentDate = new Date(this.cDate.getFullYear(), this.cDate.getMonth(), this.cDate.getDate());
         const compareDate = new Date(this.year, this.month, day);

         if (sign === '=') {
            return currentDate.getTime() === compareDate.getTime();
         } else if (sign === '>=') {
            return currentDate.getTime() >= compareDate.getTime();
         } else {
            return currentDate.getTime() <= compareDate.getTime();
         }
      },
      calendar: function () {
         let weeks = {}
         let week = 0
         let days = {}
         const dlast = new Date(this.year, this.month + 1, 0).getDate()

         for (let i = 1; i <= dlast; i++) {
            days = {
               ...days,
               [new Date(this.year, this.month, i).getDay()]: { index: i, },
            }
            if (new Date(this.year, this.month, i).getDay() === 0) {
               weeks = {
                  ...weeks,
                  [week]: days,
               }
               week += 1
               days = {}
            }
         }
         weeks = {
            ...weeks,
            [week]: days,
         }
         return weeks
      },
      decrease() {
         this.month--
         if (this.month < 0) {
            this.month = 12
            this.month--
            this.year--
         }
      },
      increase() {
         this.month++
         if (this.month > 11) {
            this.month = -1
            this.month++
            this.year++
         }
      },
   },
}
</script>
 
<style lang="scss" scoped>
.c-my-calendar {
   position: relative;
   width: 100%;

   .invisible-close {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
   }

   .date-place {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      font-size: 14px;
      color: black;
      background-color: inherit;
      border-radius: 12px;
      padding: 0;
   }

   .calendar {
      min-height: 360px;
      width: 100%;
      background: #FFFFFF;
      box-shadow: 1px 2px 8px #C8C8FC;
      border-radius: 35px;
      position: absolute;
      z-index: 2;

      .header {

         background: #E1EDEA;
         display: flex;
         align-items: center;
         justify-content: center;

         th {
            padding: 10px;
            width: 50px;
            height: 22px;
            color: #013832;
            font-size: 0.9rem;
            font-weight: 500;
         }
      }

      .top {
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding: 10px 25px;
         background: #E1EDEA;

         .dec {
            color: #38635D;
            font-size: 18px;
            transform: rotate(90deg);
         }

         .inc {
            color: #38635D;
            font-size: 18px;
            transform: rotate(-90deg);
         }

         .date {
            color: #38635D;
            font-size: 0.9rem;
            font-weight: 500;
         }
      }

      .table-wrapper {
         display: flex;
         align-items: center;
         justify-content: center;
      }

      .calendar-table {
         border-collapse: collapse;

         td {
            padding: 5px;
            width: 50px;
            height: 22px;

            .number {
               text-align: center;

               &.active {
                  color: #38635D;
                  background: #E1EDEA;
               }
            }
         }
      }
   }
}
</style>
  -->

  <template>

  </template>
  <script lang="ts"></script>
