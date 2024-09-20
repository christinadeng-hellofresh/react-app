const TimeTable = () => {
  return (
    <div class="relative overflow-x-auto px-36 py-6 text-center">
      <h3>Our Business Hours</h3>
      <table class="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Day
            </th>
            <th scope="col" class="px-6 py-3">
              Hour
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Monday
            </th>
            <td class="px-6 py-4">10:00 am - 6:00 pm</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Tuesday
            </th>
            <td class="px-6 py-4">10:00 am - 6:00 pm</td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Wednesday
            </th>
            <td class="px-6 py-4">10:00 am - 6:00 pm</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Thursday
            </th>
            <td class="px-6 py-4">10:00 am - 6:00 pm</td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Friday
            </th>
            <td class="px-6 py-4">10:00 am - 6:00 pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
