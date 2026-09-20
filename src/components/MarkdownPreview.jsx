function MarkdownPreview() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-2xl font-bold text-gray-900">
        Custom Hooks
      </h1>

      <p className="mt-4 leading-7 text-gray-600">
        Custom hooks allow us to reuse stateful logic between
        components.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-gray-900">
        Why use custom hooks?
      </h2>

      <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
        <li>Reuse logic</li>
        <li>Keep components clean</li>
        <li>Separate concerns</li>
      </ul>

      <p className="mt-6 leading-7 text-gray-600">
        <strong>Example:</strong> useLocalStorage can persist
        React state in localStorage.
      </p>
    </div>
  )
}

export default MarkdownPreview