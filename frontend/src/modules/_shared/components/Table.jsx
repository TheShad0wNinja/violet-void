/**
 * The table header object
 * @typedef {Object} TableHeader
 * @property {string} key The property name in the data object
 * @property {string} label The value shown in the table header
 */

/**
 * The table action object
 * @typedef {Object} TableAction
 * @property {string} label The text of the action
 * @property {function} onClick The function the action triggers
 * @property {string} [className] Additional custom styling to the action
 */

/**
 * Dynamic Table Component
 * @param {Object} props - Component props
 * @param {TableHeader[]} props.headers - Array of header objects { key: string, label: string }
 * @param {Object[]} props.data - Array of data objects (keys should match header keys)
 * @param {TableAction[]} props.actions - Array of action objects { label: string, onClick: function, className: string }
 * @param {string} [props.tableClassName] - Additional classes for the table container
 * @param {string} [props.headerClassName] - Additional classes for header cells
 * @param {string} [props.rowClassName] - Additional classes for data rows
 * @param {string} [props.cellClassName] - Additional classes for data cells
 */
export default function Table({
  headers,
  data,
  actions,
  tableClassName = "",
  headerClassName = "",
  rowClassName = "",
  cellClassName = ""
}) {
  return (
    <div className={`border-accent overflow-x-auto rounded-lg border shadow-md ${tableClassName}`}>
      <table className="divide-accent min-w-full divide-y">
        <thead className="bg-secondary">
          <tr>
            {headers.map(header => (
              <th
                key={header.key}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-medium tracking-wider uppercase ${headerClassName}`}
              >
                {header.label}
              </th>
            ))}
            {actions && actions.length > 0 && (
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium tracking-wider uppercase"
              >
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className={`hover:bg-background-800 ${rowClassName}`}>
              {headers.map(header => (
                <td
                  key={`${rowIndex}-${header.key}`}
                  className={`px-6 py-4 text-sm whitespace-nowrap text-gray-400 ${cellClassName}`}
                >
                  {item[header.key]}
                </td>
              ))}
              {actions && actions.length > 0 && (
                <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                  <div className="flex justify-end space-x-2">
                    {actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={() => action.onClick(item)}
                        className={`inline-flex cursor-pointer items-center rounded-md border border-transparent px-3 py-1 text-xs shadow-sm ${action.className || "bg-indigo-600 text-white hover:bg-indigo-700"}`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
