# Enter your procedural solution here!

def collect_multiples(limit)
  numbers = []
  i = 1
  while i < limit
    if i % 3 ==0 || i % 5 == 0
      numbers.push(i)
    end
    i += 1
  end
  return numbers

end

def sum_multiples(limit)
  collect_multiples(limit).sum
end
